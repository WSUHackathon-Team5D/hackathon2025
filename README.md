# Petbook

Facebook for your pets!

<pre>                                                                                
                                                                                          
         .::----::.                                                                       
      -*##%###*#####+:                                                                    
    -#%%%@@@@@%#####%#=                                                                   
  :*@@@##@@@@@@@%####%#-                                                                  
.=#@@@@%#@@@@@@@@%%%%##+                                                                  
+%@@@%%%#@@@@@@%##*::=*+---====-.                                                         
%@@@#*%@%@@@@@##%@@%===++*#%%%%%%#=                                                       
%@@@#++*%@@@@%%%@@@*=+#**%%%%#*#%@%#-                                   -=:               
@@@@@%*--%@@@@@@@@%%%@@%%#***    -%@%=                                  ###*=.            
@@@@@@@#*%%%%@@@@%@@@@@@@@@%*      +%*                                  +***##+-          
@@@@@@@@@@#++*#%%@%%%@@%%%%%@#:                                 .+:     :++*###**+-.      
@@@%@@@@@@%+=*#%%%%%%%%%##***%%:                                 .+#=:. :=++##%%*#%%*=-.  
@%######%%*++*%%%########****+##                                  -+***=:=+**#%%##%@%%%#+-
#*+=++****###%######**=--+#@@%**:                               .==+*++--==+*#%@%*#@@@@%#*
****#####%%%%#####*+==+#%%@@@@%+++.                          .-++++*+===++**#%@%=**%@@@%##
%%%%@@@@@@@%%%%%%%%##%%%**@##@%+=%:                        -==+=+++++++==++*#%%+:+#@@@@@%%
####%%%%%%%%%%%%%##%#++*#%#*+%@#++                       .=---:====-==+===++++*=+%@@@@@@%%
++++++++++++==--::-+##+=+****%@@#*+.                     +=:=---::::----===++=+*+###%@@%%%
====+===-==--:...:-=*##+++==+%@%####+-                   =*#*%@*#*=--:--====+=--=+**+#@@@@
+====-:-==-:-:..::-=++*+====+#%%%###%%%+:                :+*-*%##++##*====+*+====++++*%%@@
++++====--:::::--==+=======++#%%%%%%%%@@%%+.             .:..=*+--=*%%%#**#*+++====++*#@@@
******+=====++++*#######***######%%%@@@@@@%#+.          .::++:=+*#***#%%#####*++++++++*#@@
+===+*#####***+**#%%@%%@%%%%%%#####%%@@@@@*==+:        :=*#+=*#####**+*#%%#%##**+**+*+**%%
++==+*#%@@%%#%%###%%@@@@@%%%%%%%%%@@@@@@@%#===+*:    .++**++*%%%%%##*+++*%@@%%%######**##%
###%%%@@@@%%#%@@@%@@@@@@@%%%%%%%@@@@@@@@@@%%@@@*.     -:.=+++*##%%@@@%%***##%%%%%%####*###
***#######%%@@@@@@@@%@@@@@%%%%%@@@%@@@@@@@@@%*:        :-===++#%#*#%%@@%##*+*+*#####%##*##
*+++*+****##%@@@@@@@@###%@@%%@@@%@@@@@@@@@@%:          .=+++**###*####%@@@@%%%%%%##*#*###%
#*++=--+***#%@@@@@@@@@@@@@@@@@@@%@@@@@@@@%*.             .+*######****##%%@%%@@@%######%%%
##*+++-=++*#%@@#:   :-=++**#%@@@@@@@@@*-:                  .-=+#**#*####%%%%%%%%#**###%%%%
%##**+==+*#%@@*               .::--::                           ..::-=*%##%%%#****##%%%@%#
@%%##*++*#@@%=                                                         :##*+**+*##%%%@%%%%
@@%%####%%%+:                                                            -+***##%@@@@@%%#%
@@%%%#%#==:                                                                .-*%%@@@@%%%#%#
@%%#*=:.                                                                      =%%%%%%%#%%#
*=:.                                                                           :#%%%%%%%%%
.                                                                               .*%%%%%@%#
                                                                                 .=#%%%%##
                                                                                   =%%##%%
                                                                                    =#%%%%
                                                                                     =%##*
                                                                                      +***
                                                                                      .+##
                                                                                        =%
</pre>


## CI/CD
This site has a ci/cd pipeline. When a tagged commit is pushed to github, a github workflow triggers, building the frontend docker image and pushing it to Dockerhub. Dockerhub then sends out a webhook to an AWS instance that triggers a deploy script. This script stops and removes the current image, pulls the update image, and starts the new container. 

## Cybersecurity
Our project has AWS security groups configured for port 22 ssh access restricted to Wright State University IP addresses. Port 3000 is open to all ip's for serving the react frontend. Port 9000 is open and listening for webhooks. Outbound access is open to all ip's

Github secrets are used in the cicd pipeline to hold the dockerhub username and access token for use in the github workflow, allowing it to push the image to the dockerhub repository

## Containerization
Frontend, backend and database are containerized though the pieces are not able to communicate with each other yet. In the future these would all be on the AWS instance and configured properly. 

Frontend is i main branch
backend is in yujawbackend branch
database datastuff branch

## database 
to run the database run this command docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres is should be the same in bash and PowerShell then run backend/tablecreation.sql

## Future work
We would make the site responsive for mobile browsers.
Add Commenting feature so that users may leave comments on other peoples pictures
Add a security question during account creation
Hash passwords for security
Get the frontend, backend, and database communicating with each other.
Host the backend and database on the AWS instance





