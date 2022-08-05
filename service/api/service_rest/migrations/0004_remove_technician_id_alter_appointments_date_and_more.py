# Generated by Django 4.0.3 on 2022-08-04 16:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0003_alter_technician_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='technician',
            name='id',
        ),
        migrations.AlterField(
            model_name='appointments',
            name='date',
            field=models.DateField(),
        ),
        migrations.AlterField(
            model_name='technician',
            name='number',
            field=models.PositiveIntegerField(primary_key=True, serialize=False),
        ),
    ]
