from django.db import models
from django.urls import reverse

# Create your models here.
class Technician(models.Model):
    name = models.CharField(max_length=100)
    number = models.PositiveIntegerField(primary_key=True, unique=True)

    def __str__(self):
        return self.name

# class AppointmentHistory(models.Model):
#     vin = models.CharField(max_length=100)
#     owner = models.CharField(max_length=100)
#     date = models.DateTimeField()
#     technician = models.ForeignKey(
#         Technician,
#         related_name= "service_appointment",
#         on_delete=models.CASCADE,
#     )
#     reason = models.TextField()

class VinVO(models.Model):
    href = models.CharField(max_length=100)
    vin = models.CharField(unique = True, max_length=17)


class Appointments(models.Model):
    vin = models.CharField(max_length=17)
    owner = models.CharField(max_length=100)
    date = models.DateTimeField()
    technician = models.ForeignKey(
        Technician,
        related_name= "appointment",
        on_delete=models.CASCADE,
    )
    reason = models.TextField()
    vip = models.BooleanField(default=False)
    def get_api_url(self):
        return reverse("api_service", kwargs={"pk": self.pk})