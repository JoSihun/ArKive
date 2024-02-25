package com.project.arkive.handler;

import lombok.RequiredArgsConstructor;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class OAuth2SuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
    // private final UserRepository userRepository;

    // @Override
    // public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws ServletException, IOException {
    //     CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();
    //     String email = oAuth2User.getEmail();
    //     User user = userRepository.findByEmail(email)
    //             .orElseGet(() -> userRepository.save(User.builder()
    //                     .email(email)
    //                     .name(oAuth2User.getName())
    //                     .picture(oAuth2User.getPicture())
    //                     .role(Role.USER)
    //                     .build()));

    //     SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(user, null, null));
    //     super.onAuthenticationSuccess(request, response, authentication);
    // }
}
// package com.project.arkive.config.auth;
//
// import com.project.arkive.user.model.User;
// import com.project.arkive.user.repository.UserRepository;
// import lombok.RequiredArgsConstructor;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;
// import org.springframework.stereotype.Component;
//
// import javax.servlet.ServletException;
// import javax.servlet.http.HttpServletRequest;
// import javax.servlet.http.HttpServletResponse;
// import java.io.IOException;
//
// @Component
// @RequiredArgsConstructor
// public class OAuth2SuccessHandler extends SavedRequestAwareAuthenticationSuccessHandler {
//     private final UserRepository userRepository;
//
//     @Override
//     public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws ServletException, IOException {
//         CustomOAuth2User oAuth2User = (CustomOAuth2User) authentication.getPrincipal();
//         String email = oAuth2User.getEmail();
//         User user = userRepository.findByEmail(email)
//                 .orElseGet(() -> userRepository.save(User.builder()
//                         .email(email)
//                         .name(oAuth2User.getName())
//                         .picture(oAuth2User.getPicture())
//                         .role(Role.USER)
//                         .build()));
//
//         SecurityContextHolder.getContext().setAuthentication(new UsernamePasswordAuthenticationToken(user, null, null));
//         super.onAuthenticationSuccess(request, response, authentication);
//     }
// }