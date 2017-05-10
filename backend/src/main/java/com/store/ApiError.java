package com.store;

import lombok.Data;
import org.springframework.http.HttpStatus;

import javax.persistence.Entity;

/**
 * Created by Jenni on 28.4.2017.
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

    public ApiError() {

    }

    /**
     * Constructs ApiError.
     * @param status
     * @param message
     */
    public ApiError(int status, String message, Object error) {
        this.status = status;
        this.message = message;
        this.error = error;
    }

}
