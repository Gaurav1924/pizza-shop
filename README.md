Pizza Shop Application

This repository contains an application for simulating the behavior of a pizza restaurant, from taking orders to making the order ready. The application is designed to fulfill the following requirements:

Features
Placing a Pizza Order: Users can place a pizza order through a form. The form allows configuring and ordering pizzas with options such as:

Types: Veg, Non-Veg
Size: Large, Medium, Small
Base: Thin, Thick
Maximum Order Limit: The restaurant can handle a maximum of 10 orders at a time. If the limit is reached, a message "Not taking any order for now" is displayed.

Order Stages:

Order Placed
Order in Making
Order Ready
Order Picked
Highlighting Delayed Orders: Orders that remain in the same stage for more than 3 minutes are highlighted in red.

Time Spent in Each Stage: The time spent in each stage is displayed for each pizza card.

Display Stages: Each stage is displayed in different columns with pizzas as cards.

Main Display:

Displays all pizzas in progress with their remaining time and order ID.
Shows the total pizzas delivered today.
Cancellation: Orders can be canceled at any time before the order is in the ready stage from the Main section.

Manual Stage Transition: Pizzas can be moved from one stage to another manually using buttons for next, picked, or cancel.

Unified Screen: Both screens are on the same page for ease of access and management.