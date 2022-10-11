package org.sangokch.model;

public class Menu {

	private String menu_cd;
	private String parent_menu_cd;
	private String menu_nm;
	private String url;
	private String use_yn;
	private int ord_no;
	private String attr1;
	
	public String getMenu_cd() {
		return menu_cd;
	}
	public void setMenu_cd(String menu_cd) {
		this.menu_cd = menu_cd;
	}
	public String getParent_menu_cd() {
		return parent_menu_cd;
	}
	public void setParent_menu_cd(String parent_menu_cd) {
		this.parent_menu_cd = parent_menu_cd;
	}
	public String getMenu_nm() {
		return menu_nm;
	}
	public void setMenu_nm(String menu_nm) {
		this.menu_nm = menu_nm;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public String getUse_yn() {
		return use_yn;
	}
	public void setUse_yn(String use_yn) {
		this.use_yn = use_yn;
	}
	public int getOrd_no() {
		return ord_no;
	}
	public void setOrd_no(int ord_no) {
		this.ord_no = ord_no;
	}
	public String getAttr1() {
		return attr1;
	}
	public void setAttr1(String attr1) {
		this.attr1 = attr1;
	}
}
