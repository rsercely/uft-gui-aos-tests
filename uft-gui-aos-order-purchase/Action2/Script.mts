Browser("Advantage Shopping").Page("Advantage Shopping").Link("LaptopsCategoryTxt").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("LaptopsCategoryTxt")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy_now").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("buy now")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("save_to_cart").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("quantity").Set DataTable("nItems", dtGlobalSheet) @@ hightlight id_;_Browser("Advantage Shopping 2").Page("Advantage Shopping").WebEdit("quantity")_;_script infofile_;_ZIP::ssf12.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("ShoppingCart")_;_script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("check_out_btn").Click

' without this, the next button is not pressed
if Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").exist then @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next btn")_;_script infofile_;_ZIP::ssf6.xml_;_
	wait 1
	Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next_btn").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("next btn")_;_script infofile_;_ZIP::ssf6.xml_;_
end if
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_username").Set "SafePayUser" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay username")_;_script infofile_;_ZIP::ssf7.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay_password").SetSecure "5d5ace061ec81f213e69dbaedf1f9e52524ddefd998b" @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("safepay password")_;_script infofile_;_ZIP::ssf8.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay_now_btn_SAFEPAY").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("pay now btn SAFEPAY")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Thank you for buying with").Check CheckPoint("Thank you for buying with Advantage") @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Thank you for buying with")_;_script infofile_;_ZIP::ssf10.xml_;_
