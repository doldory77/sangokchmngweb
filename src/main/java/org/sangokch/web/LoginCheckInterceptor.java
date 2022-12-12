package org.sangokch.web;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;

public class LoginCheckInterceptor implements HandlerInterceptor {
	
	private final Logger logger = LoggerFactory.getLogger(getClass().getSimpleName());

//	private static final String SESSION_ID = "sessionId";

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		String requestURI = request.getRequestURI();
		logger.info("인증 체크 인터셉터 실행 {}", requestURI);
		HttpSession session = request.getSession(false);
		if (session == null || session.getAttribute("admst") == null) {
			logger.info("미인증 사용자 요청");
			response.sendRedirect("/mng/login");
			return false;
		}
		return true;
	}
	
	
}
