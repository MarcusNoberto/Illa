package model

import (
	"time"

	"github.com/google/uuid"
	"github.com/illacloud/illa-supervisor-backend/src/utils/idconvertor"
)

type SignupResponse struct {
	ID           string    `json:"id"`
	UID          uuid.UUID `json:"uid"`
	TeamMemberID string    `json:"teamMemberID"`
	Nickname     string    `json:"nickname"`
	Email        string    `json:"email"`
	Avatar       string    `json:"avatar"`
	Language     string    `json:"language"`
	IsSubscribed bool      `json:"isSubscribed"`
	CreatedAt    time.Time `json:"created_at"`
	UpdatedAt    time.Time `json:"updated_at"`
}

func NewSignupResponse(user *User) *SignupResponse {
	customization := user.ExportUserCustomization()
	resp := &SignupResponse{
		ID:           idconvertor.ConvertIntToString(user.ID),
		UID:          user.UID,
		TeamMemberID: "0",
		Email:        user.Email,
		Avatar:       user.Avatar,
		Language:     customization.Language,
		IsSubscribed: customization.IsSubscribed,
		CreatedAt:    user.CreatedAt,
		UpdatedAt:    user.UpdatedAt,
	}
	return resp
}

func (resp *SignupResponse) ExportForFeedback() interface{} {
	return resp
}
