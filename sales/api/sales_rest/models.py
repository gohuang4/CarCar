from tkinter import CASCADE
from django.db import models


class SalesPerson(models.Model):
    employee = models.CharField(max_length=200, unique=True)
    number = models.PositiveBigIntegerField()
    

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

class Customer(models.Model):
    name = models.CharField(max_length=200, unique=True)
    address = models.CharField(max_length=200)
    phone = models.CharField(max_length=200, unique=True)
# Create your models here.

class Sales(models.Model):
    price = models.FloatField()
    customer = models.ForeignKey(
        Customer,
        related_name="+",
        on_delete=models.CASCADE,
    )
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="automobile",
        on_delete=models.CASCADE,
    )
    sales_person=models.ForeignKey(
        SalesPerson,
        related_name="sales_person",
        on_delete=models.CASCADE
    )
