# CarCar

Team:

* Gordon Huang - Auto Sales?
* Person 2 - Which microservice?

## Design

Sales Exalidraw:
https://excalidraw.com/#json=jOkj_2uwo3zg6rH7ivs_i,f6COurPfCeTPX9gdETsOzA
Sales person and customer are both entities as they are defined by their id and not their properties. Sales person and customer can change thier atttribues while remain the same object. The sale would be the value object here as it is defined by it's properties. The properites of a sale cannot be changed as once a sale is finalized it immutable. 

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

My SalesPerson model contains employee in a charfield and number in a positive big interger field. Employee wouuld represent the name of the employee with unique set to true to be the unique identifier. Number would be the number associated with the employee.

The AutomobileVO model is how my sales microservice will be integrated with the inventory microserice. A poller is used to obtain the vin number from Automobile model in inventory. AutomobileVO is imported into the poller and used in the get_automobiles function to poll for the data in Automobile in the inventory microservice. AutomobileVO includes the import_href, color, year, vin, and a sold property that will be used in the view to indicate if an automobile was sold. If sold is True, then the automobile cannot be sold again and will not be available for another sale record.

The Customer model has name for the customer name in a charfield, address for the customer's address in a charfield, and phone as the customer's phone number as a charfield that will also be a unique identifier for a customer as every phone number is unique to a customer.

The Sales model has price as a float field to enter in a dolar amount. The Sales model has foreign keys to AutomobileVO to get the vin, Customer to get the customer name, and SalesPerson to obtain the sales_name.

