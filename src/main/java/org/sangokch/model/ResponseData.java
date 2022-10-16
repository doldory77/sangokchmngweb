package org.sangokch.model;

public class ResponseData {
	private String code;
	private String result;
	private String msg;
	private Object data;
	private String pageno;
	private String nextYn = "N";
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

	public String getPageno() {
		return pageno;
	}

	public ResponseData setPageno(String pageno) {
		this.pageno = pageno;
		return this;
	}

	public String getNextYn() {
		return nextYn;
	}

	public ResponseData setNextYn(String nextYn) {
		this.nextYn = nextYn;
		return this;
	}
	
}
