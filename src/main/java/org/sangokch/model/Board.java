package org.sangokch.model;

import java.util.List;

public class Board {

	public int bno;
	public String kind_cd;
	public String subject;
	public String content;
	public String tag_yn;
	public String link_url;
	public int view_cnt;
	public String use_yn;
	public String writer;
	public String write_dt;
	public String modifier;
	public String modified_dt;
	public List<AttchFile> attchFiles;
	
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
	public String getTag_yn() {
		return tag_yn;
	}
	public void setTag_yn(String tag_yn) {
		this.tag_yn = tag_yn;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getLink_url() {
		return link_url;
	}
	public void setLink_url(String link_url) {
		this.link_url = link_url;
	}
	public int getView_cnt() {
		return view_cnt;
	}
	public void setView_cnt(int view_cnt) {
		this.view_cnt = view_cnt;
	}
	public String getUse_yn() {
		return use_yn;
	}
	public void setUse_yn(String use_yn) {
		this.use_yn = use_yn;
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
	public List<AttchFile> getAttchFiles() {
		return attchFiles;
	}
	public void setAttchFiles(List<AttchFile> attchFiles) {
		this.attchFiles = attchFiles;
	}
	
	
}
