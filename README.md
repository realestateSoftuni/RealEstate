<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 2000 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the Laravel [Patreon page](https://patreon.com/taylorotwell).

### Premium Partners

- **[Vehikl](https://vehikl.com/)**
- **[Tighten Co.](https://tighten.co)**
- **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
- **[64 Robots](https://64robots.com)**
- **[Cubet Techno Labs](https://cubettech.com)**
- **[Cyber-Duck](https://cyber-duck.co.uk)**
- **[Many](https://www.many.co.uk)**
- **[Webdock, Fast VPS Hosting](https://www.webdock.io/en)**
- **[DevSquad](https://devsquad.com)**
- **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
- **[OP.GG](https://op.gg)**
- **[WebReinvent](https://webreinvent.com/?utm_source=laravel&utm_medium=github&utm_campaign=patreon-sponsors)**
- **[Lendio](https://lendio.com)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

<table align="center">
  <tr>
    <td><h1>RealEstate SoftUni</h1></td>
  </tr>
</table>

## Prerequisites

### 1. Docker: Ensure you have Docker and Docker Compose installed on your machine.
 -Docker installation instructions can be found [here](https://docs.docker.com/get-docker/).</p>
 -Docker Compose installation instructions can be found [here](https://docs.docker.com/compose/install/).</p>

### 2. Git (optional, if you're cloning the repository): 
-Install Git on your machine if you haven't already.</p>
-Git installation instructions can be found [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git/).</p>

### 3. Operating System Specifics:
 -Linux: Docker and Sail run natively without additional configurations.</p>
 -macOS: Docker Desktop for Mac allows you to run Docker containers natively.</p>
 -Windows: Ensure you have WSL2 set up if you are on Windows.</p>
 -Windows users need to have WSL2 installed for a smoother experience with Docker and Laravel Sail. Detailed instructions for setting up WSL2 can be found [here](https://learn.microsoft.com/en-us/windows/wsl/install/).</p>


## Getting Started

### 1. Clone the Repository:

```
git clone [repository_url] /path/to/project
```
```
cd /path/to/project
```

### 2. Copy the .env file:
If you don't have an .env file, you can create one by copying the example provided by Laravel:

```
cp.env.example .env
```

### 4. Start the Project:

To start the project, run:

```
./start-server.sh
```
This will start the Docker containers. By default, the application will be accessible at http://localhost:8000 or the port defined in the APP_PORT variable in your .env file.

### 5. Generate an Application Key:
```
./vendor/bin/sail artisan key:generate
```

### 6. Run Migrations:
```
./vendor/bin/sail artisan migrate
```

### 7. Stop the Project:
To stop the project and the Docker containers, run:

```
./stop-server.sh
```
### 8. Setting up MailTrap for email sending in testing enviroment
 -Register in [MailTrap](https://mailtrap.io/).</p>
 -Verify email & login.</p>
 -Go to [home page](https://mailtrap.io/home) -> Email Testing -> Start Testing (SMTP Settings) </p>
 -On integrations from the dropdown menu choose PHP -> Laravel 9+ You gonna see example set up for the .env file</p>
 -Click on 'show credentials' and add them in the .env file</p>

### 9. Additional Notes
Laravel Sail documentation can be found [here](https://laravel.com/docs/10.x/sail/).
For more detailed information about the project, refer to other documentation files or inline comments.

