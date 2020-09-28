# Loan Interest Calculation

## Purpose

To calculate interest rate after rounding monthly payments in amortization schedule
Reason:
Accounting cannot cope with figures which are not of money data type (2 decimal places)
Thus, when monthly payment are rounded, the interest rate needs to be recalculated

## Reverse Calculation Interest Rate

Calculate interest with:
Principal <- Original Loan
Payment <- Monthly Payment Amount
Term <- Total number of payments

## Application Architecture

Frontend = ReactJS + Ant Design, Server = Express + NodeJS
To serve page and provide form for user input

Api = Python + Flask with uWSGI
Using Python for its maths library, functions for approximation numerical analysis and floating point mathematical calculations.

## Tags

1st installment deferment
postponement
early repayment
partial early repayment
