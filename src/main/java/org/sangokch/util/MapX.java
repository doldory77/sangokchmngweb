package org.sangokch.util;

import java.util.HashMap;
import java.util.Map;

public class MapX {
	
	private Map<String, Object> innerMap;
	
	public MapX(String key, Object value) {
		innerMap = new HashMap<>();
		innerMap.put(key, value);
	}
	
	public MapX put(String key, Object value) {
		this.innerMap.put(key, value);
		return this;
	}
	
	public Map<String, Object> getMap() {
		return this.innerMap;
	}
}
