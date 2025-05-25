package com.example.Backend.controller;

import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import com.example.Backend.exception.BillingSystemAlreadyExist;
import com.example.Backend.exception.BillingSystemInternalException;
import com.example.Backend.exception.BillingSystemNotFoundException;
import com.example.Backend.model.Item;
import com.example.Backend.reponse.BillingSystemResponseBuilder;
import com.example.Backend.service.AuthenticationService;
import com.example.Backend.utility.RequestValidationUtil;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/items")
public class ItemController {

    private final ItemService itemService;
    private final RequestValidationUtil validationUtil;

    public ItemController(ItemService itemService, RequestValidationUtil validationUtil) {
        this.itemService = itemService;
        this.validationUtil = validationUtil;
    }

    // POST Method
    @PostMapping("/add")
    public ResponseEntity<Object> addItem(@Valid @RequestBody Item item, BindingResult result) {
        try {
            ResponseEntity<Object> validationResponse = validationUtil.validateRequest(result);
            if (validationResponse != null) {
                return validationResponse;
            }

            Item addedItem = itemService.addItem(item);
            return BillingSystemResponseBuilder.responseBuilder(
                    "Item added successfully",
                    HttpStatus.CREATED,
                    addedItem
            );
        } catch (BillingSystemAlreadyExist ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    ex.getMessage(),
                    HttpStatus.BAD_REQUEST,
                    null
            );
        } catch (BillingSystemInternalException ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    BillingSystemConstants.INTERNAL_ERROR + ": " + ex.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    null
            );
        } catch (Exception ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    BillingSystemConstants.UNEXPECTED_ERROR + ": " + ex.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    null
            );
        }
    }

    @GetMapping("/all")
    public ResponseEntity<Object> getAllItems() {
        try {
            return BillingSystemResponseBuilder.responseBuilder(
                    "Items fetched successfully",
                    HttpStatus.OK,
                    itemService.getAllItems()
            );
        } catch (BillingSystemInternalException ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    BillingSystemConstants.INTERNAL_ERROR + ": " + ex.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    null
            );
        } catch (Exception ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    BillingSystemConstants.UNEXPECTED_ERROR + ": " + ex.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    null
            );
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Object> updateItem(@PathVariable("id") Long id, @RequestBody Item item) {
        try {
            item.setItemId(id);
            Item updatedItem = itemService.updateItem(item);
            return BillingSystemResponseBuilder.responseBuilder(
                    "Item updated successfully",
                    HttpStatus.OK,
                    updatedItem
            );
        } catch (BillingSystemNotFoundException ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    ex.getMessage(),
                    HttpStatus.NOT_FOUND,
                    null
            );
        } catch (BillingSystemInternalException ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    BillingSystemConstants.INTERNAL_ERROR + ": " + ex.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    null
            );
        } catch (Exception ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    BillingSystemConstants.TECHNICAL_ISSUE_MESSAGE,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    null
            );
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Object> deleteItem(@PathVariable("id") Long id, @RequestBody @Valid Item item) {
        try {
            item.setItemId(id);
            itemService.deleteItem(item);
            return BillingSystemResponseBuilder.responseBuilder(
                    "Item deleted successfully",
                    HttpStatus.OK,
                    item
            );
        } catch (BillingSystemNotFoundException ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    ex.getMessage(),
                    HttpStatus.NOT_FOUND,
                    null
            );
        } catch (BillingSystemInternalException ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    BillingSystemConstants.INTERNAL_ERROR + ": " + ex.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    null
            );
        } catch (Exception ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    BillingSystemConstants.TECHNICAL_ISSUE_MESSAGE,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    null
            );
        }
    }

    @PostMapping("/search")
    public ResponseEntity<Object> searchItemByName(@RequestBody Item item) {
        try {
            Item foundItem = itemService.searchItemByName(item);
            return BillingSystemResponseBuilder.responseBuilder(
                    "Item found successfully",
                    HttpStatus.OK,
                    foundItem
            );
        } catch (BillingSystemNotFoundException ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    ex.getMessage(),
                    HttpStatus.NOT_FOUND,
                    null
            );
        } catch (BillingSystemInternalException ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    BillingSystemConstants.INTERNAL_ERROR + ": " + ex.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    null
            );
        } catch (Exception ex) {
            return BillingSystemResponseBuilder.responseBuilder(
                    BillingSystemConstants.UNEXPECTED_ERROR + ": " + ex.getMessage(),
                    HttpStatus.INTERNAL_SERVER_ERROR,
                    null
            );
        }
    }
}
