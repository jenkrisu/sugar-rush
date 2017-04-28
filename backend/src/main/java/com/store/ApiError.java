package com.store;

import org.springframework.http.HttpStatus;

/**
 * Created by Jenni on 28.4.2017.
 */
public class ApiError {

    /**
     * HttpStatus of error.
     */
    private HttpStatus status;

    /**
     * Error message.
     */
    private String message;

    /**
     * Constructs ApiError.
     * @param status
     * @param message
     */
    public ApiError(HttpStatus status, String message) {
        this.status = status;
        this.message = message;
    }

}
