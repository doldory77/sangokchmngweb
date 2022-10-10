package org.sangokch.web;

import org.sangokch.model.ResponseData;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class ControllerExceptionHandler {

	@ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
	@ExceptionHandler(Exception.class)
	public @ResponseBody ResponseData handleAll(Exception e) {
		
		ResponseData res = new ResponseData();
		res.setResult("fail");
		res.setMsg(e.getMessage());
		
		return res;
	}
}
