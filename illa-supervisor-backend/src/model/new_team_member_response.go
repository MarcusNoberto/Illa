package model

import (
	"time"
)

type TeamMemberResponse struct {
	TeamMemberID int       `json:"teamMemberID"`
	UserId       int       `json:"UserId"`
	TeamId       int       `json:"TeamId"`
	UserRole     int       `json:"UserRole"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}

func NewTeamMemberResponse(TeamMember *TeamMember) *TeamMemberResponse {
	return &TeamMemberResponse{
		TeamMemberID: TeamMember.TeamID,
		UserId:       TeamMember.UserID,
		TeamId:       TeamMember.TeamID,
		UserRole:     TeamMember.UserRole,
		CreatedAt:    TeamMember.CreatedAt,
		UpdatedAt:    TeamMember.UpdatedAt,
	}
}

func (resp *TeamMemberResponse) ExportForFeedback() interface{} {
	return resp
}
