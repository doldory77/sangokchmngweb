package org.sangokch.web;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.sangokch.model.Admst;
import org.sangokch.model.AttchFile;
import org.sangokch.model.Board;
import org.sangokch.model.Menu;
import org.sangokch.model.ResponseData;
import org.sangokch.service.AdmstService;
import org.sangokch.service.BoardService;
import org.sangokch.service.MenuService;
import org.sangokch.util.Const;
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
	
	private ResponseData getRes(String initResult) {
		return new ResponseData(initResult);
	}
	
	@RequestMapping("/")
	public String index(Model model, HttpServletRequest request) {
//		logger.info(System.getProperty("user.dir"));
//		logger.info(request.getSession().getServletContext().getRealPath("/"));
		return "index";
	}
	
	@RequestMapping("/login")
	public String login() {
		return "login";
	}
	
	@RequestMapping("/doLogin")
	public @ResponseBody ResponseData doLogin(@RequestBody Map<String, String> params, HttpServletRequest request) {
		logger.info("id: {}, passwd: {}", params.get("id"), params.get("passwd"));
		ResponseData res = getRes("success");
		
		Admst admst = admstService.loginAdmst(params);
		logger.info(admst.getId());
		HttpSession sess = request.getSession();
		logger.info("session id: {}", sess.getId());
		sess.setAttribute("admst", admst);
		
		return res;
	}
	
	@RequestMapping("/board/save")
	public @ResponseBody ResponseData save(
			Board board,
			@RequestParam(required=false) MultipartFile[] files,
			@RequestParam(required=false) String[] fileNames) {
		
		ResponseData res = getRes("success");
		
		if (board.getBno() <= 0) {			
			boardService.insertBoard(board, files, fileNames);
		} else {
			boardService.updateBoard(board, files, fileNames);
		}
		
		return res;
		
	}
	
	@RequestMapping("/board/select")
	public @ResponseBody ResponseData select(@RequestBody Map<String, Object> params) {
		ResponseData res = getRes("success");
		int offset = -1;
		if (params.containsKey("pageno")) {
			offset = (Integer.parseInt(params.get("pageno").toString()) - 1) * Const.rowPerPage;
			logger.info("limit: {}, offset: {}", Const.rowPerPage, offset);
			params.put("limit", Const.rowPerPage);
			params.put("offset", offset);
		}
		List<Board> boards = boardService.selectBoard(params);
		
		res.setData(boards);
		if (params.containsKey("pageno")) {
			String nextYn = boardService.selectBoardTotalCnt() > offset * Const.rowPerPage ? "Y" : "N";
			res.setNextYn(nextYn);
			res.setPageno(nextYn.equals("Y") ? String.valueOf(Integer.valueOf(params.get("pageno").toString()) + 1) : params.get("pageno").toString());
		}
		
		return res;
	}
	
	@RequestMapping("/board/deleteAttch")
	public @ResponseBody ResponseData deleteAttch(@RequestBody AttchFile file) {
		if (boardService.deleteAttchFile(file) > 0) {
			return getRes("success");
		}
		throw new RuntimeException("삭제된 파일이 없습니다.");
	}
	
	@RequestMapping("/test")
	public @ResponseBody ResponseData authMenus() {
		ResponseData res = getRes("success");
		List<Menu> authMenus = menuService.selectAuthMenu();
		res.setData(authMenus);
		return res;
	}
	
}
