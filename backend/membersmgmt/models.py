from django.db import models

class members(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    year_of_birth = models.PositiveIntegerField()
    phone_number = models.CharField(max_length=15)
    country = models.CharField(max_length=100)
    county = models.CharField(max_length=100)
    sub_county = models.CharField(max_length=100)

    def __str__(self):
        return str(self.id)


class admin(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    email_address = models.CharField(max_length=255)

    def __str__(self):
        return str(self.id)
