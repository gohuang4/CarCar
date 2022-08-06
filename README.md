# CarCar

Team:

* Gordon Huang - Auto Sales?
* Lakhvinder Dhanoya - Services/Appointments

## Design

Sales Exalidraw:
https://excalidraw.com/#json=jOkj_2uwo3zg6rH7ivs_i,f6COurPfCeTPX9gdETsOzA
Sales person and customer are both entities as they are defined by their id and not their properties. Sales person and customer can change thier atttribues while remain the same object. The sale would be the value object here as it is defined by it's properties. The properites of a sale cannot be changed as once a sale is finalized it immutable. 

Services/Appointments Excalidraw:
(****** Make sure to have an empty page when pressing link to avoid overlaps with your current work ******)
https://excalidraw.com/#json=6o7uBa5Zc1yB0JYglhcde,qLyr46jYshU3yjkehzTx3w

Inventory and services are both separate bounded contexts. Automobile and services share the aggregate root VinVO which is a value object. The link between the two services is VIN. Services bounded context include appointments, technicians, and history of car services. Inventory bounded contexts include manufacturer, model, and automobile.

## Service microservice

Explain your models and integration with the inventory
microservice, here.

My appointments model has an owner, date, reason for visit, vip status, vin, and technician. technician feild in the appointment model is a foreign key to the technician model. Every technician has a name and unique identifier in the form of number. Appointments can have multiple instances of the same vin due to cars needing multiple reasons to get serviced.

The VinVo model has a field for the href and the vin. The vin feild is unique because the inventory cannot have multiple cars whith the same vin. The VinVo is also the integration point between the services/appointments microservice and the inventory microservice. This model pulls the vin from the inventory automobiles model. This model only has two fields because the only information we need is the vin of the vehicle that was in the inventory. If a vehicle was from the inventory then we set the status of the vehicle being serviced to VIP.

The technicians model has a field for the name and the number of the technician. The number is the unique identifier for this model. Every appointment needs to have a technician to service the vehicle. The same technician can work on multiple cars.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

My SalesPerson model contains employee in a charfield and number in a positive big interger field. Employee wouuld represent the name of the employee with unique set to true to be the unique identifier. Number would be the number associated with the employee.

The AutomobileVO model is how my sales microservice will be integrated with the inventory microserice. A poller is used to obtain the vin number from Automobile model in inventory. AutomobileVO is imported into the poller and used in the get_automobiles function to poll for the data in Automobile in the inventory microservice. AutomobileVO includes the import_href, color, year, vin, and a sold property that will be used in the view to indicate if an automobile was sold. If sold is True, then the automobile cannot be sold again and will not be available for another sale record.

The Customer model has name for the customer name in a charfield, address for the customer's address in a charfield, and phone as the customer's phone number as a charfield that will also be a unique identifier for a customer as every phone number is unique to a customer.

The Sales model has price as a float field to enter in a dolar amount. The Sales model has foreign keys to AutomobileVO to get the vin, Customer to get the customer name, and SalesPerson to obtain the sales_name.

## Usage Tips

Not all Nav links fit on the nav bar 

When searching appointment history user must type the VIN and it will filter all results that match the input(if vins are too similar might have to type in more charaters).


## Useful Insomnia Stuff

Manufacturer
http://localhost:8080/api/appointment/
POST
{
  "name": "Chrysler"
}

Models
http://localhost:8100/api/models/
POST
{
  "name": "Sebring",
  "picture_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Chrysler_Sebring_front_20090302.jpg/320px-Chrysler_Sebring_front_20090302.jpg",
  "manufacturer_id": 1
}

Automobiles
http://localhost:8100/api/automobiles/
POST
{
  "color": "red",
  "year": 2012,
  "vin": "1C3CC5FB2AN120174",
  "model_id": 1
}

Technician
http://localhost:8080/api/technician/
POST
{
  "name": "red",
  "number": 1
}

Appointment
http://localhost:8080/api/appointment/
POST
{
  "vin": "1C3CC5FB2AN120174",
  "owner": 1,
	"date": "2025-08-01T00:00:00+00:00",
  "technician": 1,
	"reason": "other"
}

ServiceHistory
http://localhost:8080/api/history/
