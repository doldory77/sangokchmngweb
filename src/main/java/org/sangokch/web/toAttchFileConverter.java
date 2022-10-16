package org.sangokch.web;

import org.sangokch.model.AttchFile;
import org.springframework.core.convert.converter.Converter;

public class toAttchFileConverter implements Converter<String, AttchFile>{

	@Override
	public AttchFile convert(String source) {
		return new AttchFile();
	}

	
}
