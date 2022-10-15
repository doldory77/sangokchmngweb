package org.sangokch.model;

public class ResponseData {
	public String code;
	public String result;
	public String msg;
	public Object data;
	public ResponseData(String result) {
		this.result = result;
	}
	
	public String getCode() {
		return code;
	}
	public ResponseData setCode(String code) {
		this.code = code;
		return this;
	}
	public String getResult() {
		return result;
	}
	public ResponseData setResult(String result) {
		this.result = result;
		return this;
	}
	public String getMsg() {
		return msg;
	}
	public ResponseData setMsg(String msg) {
		this.msg = msg;
		return this;
	}
	public Object getData() {
		return data;
	}
	public ResponseData setData(Object data) {
		this.data = data;
		return this;
	}
	
}
