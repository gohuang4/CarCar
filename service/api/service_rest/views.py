from urllib import response
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import VinVO, Appointments, Technician
from common.json import ModelEncoder
import json
# Create your views here.

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "number",
    ]


class VinVOEncoder(ModelEncoder):
    model = VinVO
    properties = [
        "href",
        "vin",
    ]


class AppointmentsEncoder(ModelEncoder):
    model = Appointments
    properties = [
        "owner",
        "date",
        "reason",
        "vip",
        "vin",
        "technician",
        "id"
    ]
    encoders = {
        "technician": TechnicianEncoder(),
        }
    def get_extra_data(self, o):
        return {
            "technician": o.technician.name
        }


# class HistoryEncoder(ModelEncoder):
#     model = AppointmentHistory
#     properties = [
#         "owner",
#         "date",
#         "reason",
#         "vin",
#     ]
#     encoders = {
#         "technician": TechnicianEncoder(),
#         }
#     def get_extra_data(self, o):
#         return {
#             "technician": o.technician.name
#         }  


@require_http_methods(['GET','POST'])
def api_list_technician(request):
    if request.method == "GET":
        technician = Technician.objects.all()
        return JsonResponse(
            technician,
            encoder=TechnicianEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe = False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Technician"},
                status=400,
            )


@require_http_methods(['GET','POST'])
def api_list_appointment(request):
    if request.method == "GET":
        appointment = Appointments.objects.all()
        return JsonResponse(
            appointment,
            encoder=AppointmentsEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            vin_number = content['vin']
            try:
                VinVO.objects.get(vin = vin_number)
                content['vip'] = True
                tech_number = content['technician']
                technician =  Technician.objects.get(number = tech_number )
                print("!!!!!!!!!!!!!!",technician)
                content['technician'] = technician
                appointment = Appointments.objects.create(**content)
                return JsonResponse(
                    appointment,
                    encoder=AppointmentsEncoder,
                    safe = False
                )
            except VinVO.DoesNotExist:
                tech_number = content['technician']
                technician =  Technician.objects.get(number = tech_number )
                print("!!!!!!!!!!!!!!",technician)
                content['technician'] = technician
                appointment = Appointments.objects.create(**content)
                return JsonResponse(
                    appointment,
                    encoder=AppointmentsEncoder,
                    safe = False
                    )
        except Appointments.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Appointment"},
                status=400,
            )


@require_http_methods(["DELETE", "GET", "PUT"])
def api_show_appointment(request,pk):
    if request.method == "GET":
        appointment = Appointments.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentsEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        try:
            appointment = Appointments.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentsEncoder,
                safe=False,
                )
        except Appointments.DoesNotExist:
            return JsonResponse(
                {"message": "Does not exist"},
                status=400,
                )
    else:
        try:
            content = json.loads(request.body)
            appointment = Appointments.objects.get(id=pk)
            return JsonResponse(
                appointment,
                encoder=AppointmentsEncoder,
                safe = False
            )
        except:
            return JsonResponse({"message": "Does not exist"},
            status=400,
            )

@require_http_methods(['GET'])
def api_history(request):
    history = Appointments.objects.all()
    print(history)
    return JsonResponse(
            history,
            encoder=AppointmentsEncoder,
            safe=False
            )