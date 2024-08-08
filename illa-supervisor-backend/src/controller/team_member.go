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

func (controller *Controller) UpdateTeamMember(c *gin.Context) {
	// get request body
	req := model.NewUpdateTeamMemberRequest()
	if err := json.NewDecoder(c.Request.Body).Decode(&req); err != nil {
		controller.FeedbackBadRequest(c, ERROR_FLAG_PARSE_REQUEST_BODY_FAILED, "parse request body error: "+err.Error())
		return
	}
	userID, errInGetUserID := controller.GetUserIDFromAuth(c)
	if errInGetUserID != nil {
		return
	}

	// validate payload required fields
	validate := validator.New()
	if err := validate.Struct(req); err != nil {
		controller.FeedbackBadRequest(c, ERROR_FLAG_PARSE_REQUEST_BODY_FAILED, "parse request body error: "+err.Error())
		return
	}

	teamMember, errInGetTeamMember := controller.Storage.TeamMemberStorage.RetrieveByTeamIDAndUserID(req.TeamID, userID)
	if errInGetTeamMember != nil {
		return
	}
	if teamMember.UserRole != model.USER_ROLE_OWNER &&
		teamMember.UserRole != model.USER_ROLE_ADMIN {
		controller.FeedbackBadRequest(c, ERROR_FLAG_ACCESS_DENIED, "you can not access this attribute due to access control policy.")
		return
	}

	updatedTeamMember, errInGetTeamMember := controller.Storage.TeamMemberStorage.RetrieveByTeamIDAndUserID(req.TeamID, req.UserID)

	if errInGetTeamMember != nil {
		return
	}

	updatedTeamMember.UserRole = req.UserRole
	updatedTeamMember.Permission = req.Permission
	updatedTeamMember.UpdatedAt = time.Now()

	errInUpdateTeamMember := controller.Storage.TeamMemberStorage.Update(updatedTeamMember)
	if errInUpdateTeamMember != nil {
		controller.FeedbackBadRequest(c, ERROR_TEAM_MEMBER_UPDATE, "team member update error: "+errInUpdateTeamMember.Error())
		return
	}

	// ok, feedback
	controller.FeedbackOK(c, model.NewTeamMemberResponse(updatedTeamMember))
	return
}

func (controller *Controller) DeleteTeamMember(c *gin.Context) {
	// get request body
	req := model.NewDeleteTeamMemberRequest()
	if err := json.NewDecoder(c.Request.Body).Decode(&req); err != nil {
		controller.FeedbackBadRequest(c, ERROR_FLAG_PARSE_REQUEST_BODY_FAILED, "parse request body error: "+err.Error())
		return
	}

	userID, errInGetUserID := controller.GetUserIDFromAuth(c)
	if errInGetUserID != nil {
		return
	}

	// TODO nao devemos por isso no canManage?
	teamMemberToDelete, errInGetTeamMember := controller.Storage.TeamMemberStorage.RetrieveByID(req.TeamMemberId)
	myTeamMember, _ := controller.Storage.TeamMemberStorage.RetrieveByTeamIDAndUserID(teamMemberToDelete.TeamID, userID)

	if errInGetTeamMember != nil {
		controller.FeedbackBadRequest(c, ERROR_TEAM_MEMBER_DELETE, "team member deletion error: "+errInGetTeamMember.Error())
		return
	}

	// validate payload required fields
	validate := validator.New()
	if err := validate.Struct(req); err != nil {
		controller.FeedbackBadRequest(c, ERROR_FLAG_VALIDATE_REQUEST_BODY_FAILED, "validate request body error: "+err.Error())
		return
	}

	if myTeamMember.UserRole != model.USER_ROLE_OWNER &&
		myTeamMember.UserRole != model.USER_ROLE_ADMIN {
		controller.FeedbackBadRequest(c, ERROR_FLAG_ACCESS_DENIED, "you can not access this attribute due to access control policy.")
		return
	}

	// delete team member
	errInDeleteTeamMember := controller.Storage.TeamMemberStorage.DeleteByID(req.TeamMemberId)
	if errInDeleteTeamMember != nil {
		controller.FeedbackBadRequest(c, ERROR_TEAM_MEMBER_DELETE, "team member deletion error: "+errInDeleteTeamMember.Error())
		return
	}

	fmt.Print("\n\n\n CHEGOU AQUI 2 \n\n\n")

	// ok, feedback
	controller.FeedbackOK(c, model.NewDeleteTeamMemberResponse(teamMemberToDelete))
	return
}
