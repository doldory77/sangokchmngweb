package org.sangokch.web;

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
				
		return "index";
	}
	
	@RequestMapping("/login")
	public String login() {
		return "login";
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
