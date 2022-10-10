package org.sangokch.web;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.sangokch.model.Board;
import org.sangokch.model.ResponseData;
import org.sangokch.service.BoardService;
import org.sangokch.service.TestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class DefaultController {

	@Autowired
	TestService testService;
	
	@Autowired
	BoardService boardService;
	
//	@Autowired
//	private SqlSessionFactory sqlSessionFactory;
	
	@RequestMapping("/")
	public String index(Model model) {
		List<Map<String, Object>> menuList = new ArrayList<>();
		Map<String, Object> menu = null;
		
		menu = new HashMap<>();
		menu.put("name", "Home");
		menu.put("path", "/");
		menuList.add(menu);
		
		menu = new HashMap<>();
		menu.put("name", "Help");
		menu.put("path", "/help");
		menuList.add(menu);
		
		menu = new HashMap<>();
		menu.put("name", "Board");
		menu.put("path", "/board");
		menuList.add(menu);
		
		model.addAttribute("name", "doldory");
		
		System.out.println(System.getProperty("user.dir"));
		
		return "index";
	}
	
	@RequestMapping("/upload")
	public @ResponseBody ResponseData upload(
			Board board,
			@RequestParam(required=false) MultipartFile[] files,
			@RequestParam(required=false) String[] fileNames) {
		
		ResponseData res = new ResponseData();
		res.setResult("success");
		
		boardService.insertBoard(board, files, fileNames);
		
		return res;
		
	}
	
}
