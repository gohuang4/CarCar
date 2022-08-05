from django.contrib import admin
from .models import Technician, VinVO, Appointments



# Register your models here.
@admin.register(VinVO)
class VinVOAdmin(admin.ModelAdmin):
    pass


@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass


@admin.register(Appointments)
class AppointmentsAdmin(admin.ModelAdmin):
    pass