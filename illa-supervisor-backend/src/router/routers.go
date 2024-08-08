package router

import (
	"github.com/gin-gonic/gin"
	"github.com/illacloud/illa-supervisor-backend/src/authenticator"
	"github.com/illacloud/illa-supervisor-backend/src/controller"
)

type Router struct {
	Controller    *controller.Controller
	Authenticator *authenticator.Authenticator
}

func NewRouter(controller *controller.Controller, authenticator *authenticator.Authenticator) *Router {
	return &Router{
		Controller:    controller,
		Authenticator: authenticator,
	}
}

func (r *Router) RegisterRouters(engine *gin.Engine) {
	routerGroup := engine.Group("/api/v1")

	authRouter := routerGroup.Group("/auth")
	usersRouter := routerGroup.Group("/users")
	teamsRouter := routerGroup.Group("/teams")
	statusRouter := routerGroup.Group("/status")
	teamMemberRouter := routerGroup.Group("/teamMember")

	// register auth
	usersRouter.Use(r.Authenticator.JWTAuth())
	teamsRouter.Use(r.Authenticator.JWTAuth())
	teamMemberRouter.Use(r.Authenticator.JWTAuth())

	// auth routers
	authRouter.GET("/getJWT", r.Controller.GetJWT)
	authRouter.POST("/verification", r.Controller.GetVerificationCode)
	authRouter.POST("/signin", r.Controller.SignIn)
	authRouter.POST("/forgetPassword", r.Controller.ForgetPassword)
	authRouter.POST("/signup", r.Controller.SignUp)

	// user routers
	usersRouter.GET("", r.Controller.RetrieveUserByID)
	usersRouter.GET("/whoAmI", r.Controller.WhoAmI)
	usersRouter.GET("/avatar/uploadAddress/fileName/:fileName", r.Controller.GetUserAvatarUploadAddress)
	usersRouter.PATCH("/password", r.Controller.UpdatePassword)
	usersRouter.PATCH("/nickname", r.Controller.UpdateNickname)
	usersRouter.PATCH("/avatar", r.Controller.UpdateAvatar)
	usersRouter.PATCH("/language", r.Controller.UpdateLanguage)
	usersRouter.PATCH("/tutorialViewed", r.Controller.UpdateIsTutorialViewed)
	usersRouter.DELETE("", r.Controller.DeleteUser)
	usersRouter.POST("/logout", r.Controller.Logout)

	// teams routers
	teamsRouter.POST("", r.Controller.CreateTeam)
	teamsRouter.GET("/my", r.Controller.GetMyTeams)
	teamsRouter.PATCH("/:teamID/config", r.Controller.UpdateTeamConfig)
	teamsRouter.PATCH("/:teamID/permission", r.Controller.UpdateTeamPermission)
	teamsRouter.GET("/:teamID/getStringCode", r.Controller.GetStringTeamCode)

	// status router
	statusRouter.GET("", r.Controller.Status)

	//TeamMember Router
	teamMemberRouter.POST("", r.Controller.CreateTeamMember)
	teamMemberRouter.PUT("", r.Controller.UpdateTeamMember)
	teamMemberRouter.DELETE("/deleteTeamMember", r.Controller.DeleteTeamMember)
}
