package controller

import (
	"encoding/json"
	"fmt"
	"github.com/gin-gonic/gin"
	"github.com/go-playground/validator/v10"
	"github.com/illacloud/illa-supervisor-backend/src/model"
	"time"
)

func (controller *Controller) CreateTeamMember(c *gin.Context) {
	fmt.Println("ENTROU NA FUNCAO")
	/*userID, errInGetUserID := controller.GetUserIDFromAuth(c)
	if errInGetUserID != nil {
		return
	}*/
	// get request body
	req := model.NewTeamMemberRequest()
	if err := json.NewDecoder(c.Request.Body).Decode(&req); err != nil {
		controller.FeedbackBadRequest(c, ERROR_FLAG_PARSE_REQUEST_BODY_FAILED, "parse request body error: "+err.Error())
		return
	}

	// validate payload required fields
	validate := validator.New()
	if err := validate.Struct(req); err != nil {
		controller.FeedbackBadRequest(c, ERROR_FLAG_VALIDATE_REQUEST_BODY_FAILED, "validate request body error: "+err.Error())
		return
	}

	// team member creation
	teamMember := model.TeamMember{
		TeamID:     req.IdTeam,
		UserID:     req.UserId,
		UserRole:   req.RoleTeam,
		Permission: `{"Config": 0}`,
		Status:     1,
		CreatedAt:  time.Now(),
		UpdatedAt:  time.Now(),
	}

	_, errInCreateTeamMember := controller.Storage.TeamMemberStorage.Create(&teamMember)
	if errInCreateTeamMember != nil {
		controller.FeedbackBadRequest(c, ERROR_TEAM_MEMBER_CREATION, "team member creation error: "+errInCreateTeamMember.Error())
		return
	}

	// ok, feedback
	controller.FeedbackOK(c, model.NewTeamMemberResponse(&teamMember))
	return
}

/*
func (controller *Controller) GetTeamMembersByUserID(c *gin.Context) {
	userID, errInGetUserID := controller.GetUserIDFromAuth(c)
	if errInGetUserID != nil {
		controller.FeedbackUnauthorized(c, ERROR_FLAG_UNAUTHORIZED, "unauthorized: "+errInGetUserID.Error())
		return
	}

	// Retrieve team members by user ID
	teamMembers, errInRetrieve := controller.Storage.TeamMemberStorage.RetrieveByUserID(userID)
	if errInRetrieve != nil {
		controller.FeedbackInternalServerError(c, ERROR_FLAG_RETRIEVE_TEAM_MEMBERS_FAILED, "retrieve team members error: "+errInRetrieve.Error())
		return
	}

	// ok, feedback
	c.JSON(http.StatusOK, gin.H{"team_members": teamMembers})
	return
}

func (controller *Controller) UpdateTeamMemberTeamID(c *gin.Context) {
	var req struct {
		UserID int `json:"user_id" binding:"required"`
		TeamID int `json:"team_id" binding:"required"`
	}

	// Parse JSON request
	if err := c.ShouldBindJSON(&req); err != nil {
		controller.FeedbackBadRequest(c, ERROR_FLAG_PARSE_REQUEST_BODY_FAILED, "parse request body error: "+err.Error())
		return
	}

	// Retrieve the existing team member
	teamMember, err := controller.Storage.TeamMemberStorage.RetrieveByUserID(req.UserID)
	if err != nil {
		controller.FeedbackInternalServerError(c, ERROR_FLAG_RETRIEVE_TEAM_MEMBER_FAILED, "retrieve team member error: "+err.Error())
		return
	}

	// Update the team ID
	teamMember.TeamID = req.TeamID
	teamMember.UpdatedAt = time.Now()

	// Save the updated team member
	if err := controller.Storage.TeamMemberStorage.Update(&teamMember); err != nil {
		controller.FeedbackInternalServerError(c, ERROR_FLAG_UPDATE_TEAM_MEMBER_FAILED, "update team member error: "+err.Error())
		return
	}

	// Respond with the updated team member
	controller.FeedbackOK(c, model.NewTeamMemberResponse(&teamMember))
	return
}

*/
