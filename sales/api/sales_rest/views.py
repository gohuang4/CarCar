from pickle import GET
from django.shortcuts import render

# Create your views here.

from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Sales, AutomobileVO, Customer, SalesPerson
from common.json import ModelEncoder
import json
import requests

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
      "import_href", "color", "vin", "year", "sold"
    ]
class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
      "name", "address", "phone","id"
    ]
class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
      "employee", "number","id"
    ]


class SalesEncoder(ModelEncoder):
    model = Sales
    properties = [
        "price",
        "id",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder()
    }
    encoders = {
        "sales_person": SalesPersonEncoder()
    }
    encoders = {
        "customer": CustomerEncoder()
    }
    def get_extra_data(self, o):
        return {
          "automobile": o.automobile.vin,
          "sales_person": o.sales_person.employee,
          "customer": o.customer.name
        }
      



@require_http_methods(["GET", "POST"])
def api_sales_list(request):
    if request.method == "GET":
      # print(request)
      sales = Sales.objects.all()
      # response = requests.get("http://inventory-api:8000/api/automobiles/")
      # content = json.loads(response.content)
      return JsonResponse(
        sales,
        encoder=SalesEncoder,
        safe=False
      )

    else: #POST
        # print(request.body)
        content = json.loads(request.body)
        # print("!!!!!!!!!!!!!", content)
        try:
            vin = content["automobile"]
            automobile = AutomobileVO.objects.get(vin=vin)
            # print(automobile)
            content["automobile"] = automobile
  
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid vin href"},
                status=400,
            )
        emp_number=content["sales_person"]
        sales_person=SalesPerson.objects.get(id=emp_number)
        # # # print(sales_person.employee)
        content["sales_person"] = sales_person

        cust_id=content["customer"]
        customer=Customer.objects.get(id=cust_id)
        # # # print(customer)
        content["customer"] = customer
        # # print(content)
        if AutomobileVO.sold != True:
          sales = Sales.objects.create(**content)
          response = requests.delete("http://inventory-api:8000/api/automobiles/"+ automobile.vin)
          # print(response)
          AutomobileVO.sold == True
          return JsonResponse(
            sales,
            encoder=SalesEncoder,
            safe=False
          )
        else:
          print("Car is Sold!")

@require_http_methods(["GET"])
def api_show_sale(request, pk):
  if request.method =="GET":
    sale=Sales.objects.get(id=pk)
    return JsonResponse(
      sale,
      endocer=SalesEncoder,
      safe=False
    )



# @require_http_methods(["DELETE"])
# def api_delete_shoes(request, pk):
#     try:
#         shoe = Shoe.objects.get(id=pk)
#         shoe.delete()
#         return JsonResponse(
#           shoe,
#           encoder=ShoeEncoder,
#           safe=False,
#         )
#     except Shoe.DoesNotExist:
#         return JsonResponse({"message": "Does not exist"})

@require_http_methods(["GET", "POST"])
def api_customer_list(request):
    if request.method == "GET":
      customer = Customer.objects.all()
      return JsonResponse(
        customer,
        encoder=CustomerEncoder,
        safe=False
      )
    else:
      try:
        content = json.loads(request.body)                    
        customer = Customer.objects.create(**content)
        return JsonResponse(
          customer,
          encoder=CustomerEncoder,
          safe=False
        )
      except Customer.DoesNotExist:
              response = JsonResponse({ 'message': 'Does not exist'})
              response.status_code = 404
              return response 


@require_http_methods(["GET", "POST"])
def api_sales_person_list(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except SalesPerson.DoesNotExist:
                response = JsonResponse({ 'message': 'Does not exist'})
                response.status_code = 404
                return response 


        # sales_person = Sales.objects.create(**content)
        # return JsonResponse(
        #   sales_person,
        #   encoder=SalesEncoder,
        #   safe=False
        # )

