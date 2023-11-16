from django.db import models

class Member(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other')
    ]

    SUB_COUNTY_CHOICES = [
        ('Mvita', 'Mvita'),
        ('Jomvu', 'Jomvu'),
        ('Changamwe', 'Changamwe'),
        ('Kisauni', 'Kisauni'),
        ('Nyali', 'Nyali'),
        ('Likoni', 'Likoni')
    ]

    member_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    year_of_birth = models.IntegerField()
    phone_number = models.CharField(max_length=15)
    email_address = models.EmailField()
    country = models.CharField(max_length=50, default='Kenya')
    county = models.CharField(max_length=50)
    sub_county = models.CharField(max_length=50, choices=SUB_COUNTY_CHOICES)

    def __str__(self):
        return self.name

class Admin(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=15)
    email_address = models.EmailField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
