' before running this action
' create an account in AOS
' change the value username/password
' reminder - you generate an ecrypted password with
' "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\bin\PasswordEncryption.exe"
' or change the password.SetSecure to password.Set and use an unencrypted password

' if you change the record and run settings to parameterize the browser
' IE, CHROME, and FIREFOX64 have been verified

Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "rsercely" '"<your user name>" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").Set "1qaz@WSX" '"<your clear password>" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password")_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign in btnundefined")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu 2")_;_script infofile_;_ZIP::ssf6.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("SignOut").Check CheckPoint("Login Successful") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("Link")_;_script infofile_;_ZIP::ssf7.xml_;_
