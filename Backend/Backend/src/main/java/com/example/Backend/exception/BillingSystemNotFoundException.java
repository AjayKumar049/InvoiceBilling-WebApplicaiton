package com.example.Backend.exception;

public class BillingSystemNotFoundException extends RuntimeException {

	public BillingSystemNotFoundException(String message) {
		super(message);
	}
	
	 public BillingSystemNotFoundException(String message, Throwable cause) {
	        super(message, cause);
	    }
	
	
	 

}
