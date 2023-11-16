# Generated by Django 4.2.6 on 2023-11-16 08:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('membersmgmt', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='member',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=10),
        ),
        migrations.AlterField(
            model_name='member',
            name='sub_county',
            field=models.CharField(choices=[('Mvita', 'Mvita'), ('Jomvu', 'Jomvu'), ('Changamwe', 'Changamwe'), ('Kisauni', 'Kisauni'), ('Nyali', 'Nyali'), ('Likoni', 'Likoni')], max_length=50),
        ),
    ]
