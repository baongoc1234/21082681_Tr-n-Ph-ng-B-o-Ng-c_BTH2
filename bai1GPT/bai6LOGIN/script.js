import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class LoginServlet extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) {
        String username = request.getParameter("username");
        String password = request.getParameter("password");

        // Xác minh tên người dùng và mật khẩu
        // ...

        if (isValidUser(username, password)) {
            // Chuyển hướng đến trang chủ
            response.sendRedirect("/home");
        } else {
            // Hiển thị thông báo lỗi
            request.setAttribute("errorMessage", "Tên người dùng hoặc mật khẩu không hợp lệ");
            request.getRequestDispatcher("/login.jsp").forward(request, response);
        }
    }

    private boolean isValidUser(String username, String password) {
        // TODO: Xác minh tên người dùng và mật khẩu với cơ sở dữ liệu hoặc dịch vụ xác thực
        return true;
    }
}
