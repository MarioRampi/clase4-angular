package com.grupo109.api.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.JWTVerifier;

public class Auth {
	static private String secret = "clave_super_hiper_secreta";

	static public String generateJWT(Login p) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);

		    String token = JWT.create()
		        .withIssuer("auth0")
		        .withClaim("user", p.email)
		        .withClaim("admin", true)
		        .sign(algorithm);

			return token;
		} catch (Exception e) {
			// TODO: handle exception
			return "";
		}
	}

	static public boolean verify(String t) {
		try {
			Algorithm algorithm = Algorithm.HMAC256(secret);

		    JWTVerifier verifier = JWT.require(algorithm)
		        .withIssuer("auth0")
		        .build(); //Reusable verifier instance

    		verifier.verify(t);

		    return true;
		} catch(JWTVerificationException e) {
			return false;
		} catch (Exception e) {
			// TODO: handle exception

			return false;
		}
	}
}
