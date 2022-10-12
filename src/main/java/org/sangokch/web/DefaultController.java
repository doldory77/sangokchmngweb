package org.sangokch.web;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.sangokch.model.Admst;
import org.sangokch.model.Board;
import org.sangokch.model.Menu;
import org.sangokch.model.ResponseData;
import org.sangokch.service.AdmstService;
import org.sangokch.service.BoardService;
import org.sangokch.service.MenuService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class DefaultController {
	
	private final Logger logger = LoggerFactory.getLogger(getClass().getSimpleName());

	@Autowired
	AdmstService admstService;
	
	@Autowired
	BoardService boardService;
	
	@Autowired
	MenuService menuService;
	
	@RequestMapping("/")
	public String index(Model model) {
				
		return "index";
	}
	
	@RequestMapping("/login")
	public String login() {
		return "login";
	}
	
	@RequestMapping("/doLogin")
	public @ResponseBody ResponseData doLogin(@RequestBody Map<String, String> params, HttpServletRequest request) {
		logger.info("id: {}, passwd: {}", params.get("id"), params.get("passwd"));
		ResponseData res = new ResponseData();
		res.setResult("success");
		
		Admst admst = admstService.loginAdmst(params);
		logger.info(admst.getId());
		HttpSession sess = request.getSession();
		logger.info("session id: {}", sess.getId());
		sess.setAttribute("admst", admst);
		
		return res;
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
	
	@RequestMapping("/test")
	public @ResponseBody ResponseData authMenus() {
		ResponseData res = new ResponseData();
		res.setResult("success");
		List<Menu> authMenus = menuService.selectAuthMenu();
		res.setData(authMenus);
		return res;
	}
	
}
