package org.sangokch.util;

import java.util.HashMap;
import java.util.Map;

public class MapX {
	
	private Map<String, String> innerMap;
	
	public MapX(String key, String value) {
		innerMap = new HashMap<>();
		innerMap.put(key, value);
	}
	
	public MapX put(String key, String value) {
		this.innerMap.put(key, value);
		return this;
	}
	
	public Map<String, String> getMap() {
		return this.innerMap;
	}
}
