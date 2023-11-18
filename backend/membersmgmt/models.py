from django.contrib.auth.models import User
from django.db import models

class Member(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other')
    ]

    SUB_COUNTY_CHOICES = [
        ('Mvita', 'Mvita'),
        ('Jomvu', 'Jomvu'),
        ('Changamwe', 'Changamwe'),
        ('Kisauni', 'Kisauni'),
        ('Nyali', 'Nyali'),
        ('Likoni', 'Likoni')
    ]

    member_id = models.CharField(max_length=20, primary_key=True, unique=True, default='SPH-M0000')
    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    year_of_birth = models.IntegerField()
    phone_number = models.CharField(max_length=15)
    email_address = models.EmailField()
    country = models.CharField(max_length=50, default='Kenya')
    county = models.CharField(max_length=50)
    sub_county = models.CharField(max_length=50, choices=SUB_COUNTY_CHOICES)

    def save(self, *args, **kwargs):
        if not self.member_id or self.member_id == 'SPH-M0000':
            last_member = Member.objects.order_by('-member_id').first()
            if last_member:
                last_id = int(last_member.member_id.split('-M')[-1])
            else:
                last_id = 0
            new_id = 'SPH-M{:04d}'.format(last_id + 1)
            self.member_id = new_id

        super().save(*args, **kwargs)

# Admin (User) model
class AdminProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    phone_number = models.CharField(max_length=15)

    def __str__(self):
        return self.user.username

