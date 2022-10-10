package org.sangokch.model;

public class Board {

	public int bno;
	public String kind_cd;
	public String subject;
	public String content;
	public int view_cnt;
	public String del_yn;
	public String writer;
	public String write_dt;
	public String modifier;
	public String modified_dt;
	
	public int getBno() {
		return bno;
	}
	public void setBno(int bno) {
		this.bno = bno;
	}
	public String getKind_cd() {
		return kind_cd;
	}
	public void setKind_cd(String kind_cd) {
		this.kind_cd = kind_cd;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public int getView_cnt() {
		return view_cnt;
	}
	public void setView_cnt(int view_cnt) {
		this.view_cnt = view_cnt;
	}
	public String getDel_yn() {
		return del_yn;
	}
	public void setDel_yn(String del_yn) {
		this.del_yn = del_yn;
	}
	public String getWriter() {
		return writer;
	}
	public void setWriter(String writer) {
		this.writer = writer;
	}
	public String getWrite_dt() {
		return write_dt;
	}
	public void setWrite_dt(String write_dt) {
		this.write_dt = write_dt;
	}
	public String getModifier() {
		return modifier;
	}
	public void setModifier(String modifier) {
		this.modifier = modifier;
	}
	public String getModified_dt() {
		return modified_dt;
	}
	public void setModified_dt(String modified_dt) {
		this.modified_dt = modified_dt;
	}
	
	
}
