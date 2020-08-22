dim dayNumber
dim a

dayNumber = Weekday(Date,2)
if dayNumber >= 6 then
a="C:\Users\Ruoqi\Desktop\ssss\index.html"
elseif dayNumber = 1 then
a="C:\Users\Ruoqi\Desktop\ssss\index.html"
else
a="C:\Users\Ruoqi\Desktop\ssss\"&dayNumber&".html"
end if

CreateObject("WScript.Shell").Run(a)
