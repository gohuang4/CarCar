from django.contrib import admin
from.models import Customer, Sales, SalesPerson, AutomobileVO

# Register your models here.
@admin.register(Customer)
class Customer(admin.ModelAdmin):
    pass

@admin.register(Sales)
class Sales(admin.ModelAdmin):
    pass

@admin.register(SalesPerson)
class SalesPerson(admin.ModelAdmin):
    pass

@admin.register(AutomobileVO)
class AutomobileVO(admin.ModelAdmin):
    pass