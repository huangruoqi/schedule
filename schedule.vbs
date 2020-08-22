dim dayNumber
dim a

dayNumber = Weekday(Date,0)
if dayNumber >= 6 then
a="C:\Users\Leon\Desktop\schedule-master\index.html"
elseif dayNumber = 1 then
a="C:\Users\Leon\Desktop\schedule-master\index.html"
else
a="C:\Users\Leon\Desktop\schedule-master\"&dayNumber&".html"
end if

CreateObject("WScript.Shell").Run(a)

