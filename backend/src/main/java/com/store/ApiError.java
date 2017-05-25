package com.store;

import lombok.Data;
import org.springframework.http.HttpStatus;

import javax.persistence.Entity;

/**
 * ApiError is a helper class to pass api errors to frontend.
 *
 * @author  Jenni Unkuri
 * @version 2017-04-28
 * @since   1.8
 */
@Data
public class ApiError {

    /**
     * HttpStatus of error.
     */
    private int status;

    /**
     * Error message.
     */
    private String message;

    /**
     * What caused the error.
     */
    private Object error;

    /**
     * Default constructor.
     */
    public ApiError() {

    }

    /**
     * Constructs ApiError.
     *
     * @param status    status message of the error
     * @param message   message of the error
     * @param error     object the error is related to
     */
    public ApiError(int status, String message, Object error) {
        this.status = status;
        this.message = message;
        this.error = error;
    }

}
