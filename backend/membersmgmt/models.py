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

class Admin(models.Model):
    id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    phone_number = models.CharField(max_length=15)
    email_address = models.EmailField()

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
