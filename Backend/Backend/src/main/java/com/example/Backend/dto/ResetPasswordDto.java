package com.example.Backend.dto;

public class ResetPasswordDto {
	
		private String token;
		private String newPassword;
	 
		public ResetPasswordDto() {}
		public ResetPasswordDto(String token, String newPassword) {
		super();
		this.token = token;
		this.newPassword = newPassword;
		}
		public String getToken() {
		return token;
		}
		public void setToken(String token) {
		this.token = token;
		}
		public String getNewPassword() {
		return newPassword;
		}
		public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
		}
	 

}
