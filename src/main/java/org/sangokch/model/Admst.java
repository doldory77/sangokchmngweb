package org.sangokch.model;

import java.util.List;

public class Admst {

	private String id;
	private String name;
	private String passwd;
	private String use_yn;
	private String super_yn;
	private String attr;
	private List<String> authorities;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPasswd() {
		return passwd;
	}
	public void setPasswd(String passwd) {
		this.passwd = passwd;
	}
	public String getUse_yn() {
		return use_yn;
	}
	public void setUse_yn(String use_yn) {
		this.use_yn = use_yn;
	}
	public String getSuper_yn() {
		return super_yn;
	}
	public void setSuper_yn(String super_yn) {
		this.super_yn = super_yn;
	}
	public String getAttr() {
		return attr;
	}
	public void setAttr(String attr) {
		this.attr = attr;
	}
	public List<String> getAuthorities() {
		return authorities;
	}
	public void setAuthorities(List<String> authorities) {
		this.authorities = authorities;
	}
}
