package controller

import (
	"encoding/json"
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

	// validate payload required fields
	validate := validator.New()
	if err := validate.Struct(req); err != nil {
		controller.FeedbackBadRequest(c, ERROR_FLAG_VALIDATE_REQUEST_BODY_FAILED, "validate request body error: "+err.Error())
		return
	}

	oldTeamMember, _ := controller.Storage.TeamMemberStorage.RetrieveByID(req.ID)

	// team member creation
	newTeamMember := model.TeamMember{
		ID:         req.ID,
		TeamID:     req.TeamID,
		UserID:     req.UserID,
		UserRole:   req.UserRole,
		Permission: req.Permission,
		Status:     1,
		CreatedAt:  oldTeamMember.CreatedAt,
		UpdatedAt:  time.Now(),
	}

	errInUpdateTeamMember := controller.Storage.TeamMemberStorage.Update(&newTeamMember)
	if errInUpdateTeamMember != nil {
		controller.FeedbackBadRequest(c, ERROR_TEAM_MEMBER_UPDATE, "team member update error: "+errInUpdateTeamMember.Error())
		return
	}

	// ok, feedback
	controller.FeedbackOK(c, model.NewTeamMemberResponse(&newTeamMember))
	return
}
