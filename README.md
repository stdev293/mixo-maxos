mixo-maxos
==========

-- Introduction --
Mixomaxos is intended to be a password generator for all you web needs.

-- Disclaimer --
Mixomaxos is an experimental project and its concept has not been validated by any cryptography/security expert. Use it at your own risk.
Moreover it is far from finished yet, so please be kind to the developers.

-- Why --
It addresses the following safety concerns:
- Weak internet passwords: in order to be able to remember them, a human person registering into websites usually choses password he/she can remember, thus passwords such as 'password1', '123456' and so on.
- Single password used to connect to several sites: since most people have a hard time remembering tens of passwords they should have for the tens of web services they ususally or occasionnaly connect to, they tend to chose one or two different passwords for all their web identities. The consequence is that if a password gets compromised on a single site/service, the attacker can use the same email/password combination on a number of other sites/services.

-- How --
The idea behind mixomaxos is to create unique passwords associated to a service or domain name.
The user has to remember a rather long phrase (for example, a verse from a poem or song he/she likes). This phrase is used to encrypt the target domain name using a state-of-the-art encryption algorithm. The user can then use the long and complicated generated hash (base64-encoded encrypted data) as a password to the website.

The benefit of this system is that the multiple passwords do not have to be recorded somewhere by the user. The user just needs to remember the designed-for-humans and beautiful bit of poetry that he/she has chosen, and can regenerate the password at will.

Note that the complete key generation is done in-browser (client-side javascript only), so the generating data does not transit to potentially unsecure connections.

-- Where --
http://mixo-maxos.appspot.com/

-- Inspiration --
http://xkcd.com/936/

-- Credits --
SHA256 javascript library by caligatio: http://caligatio.github.com/jsSHA/

