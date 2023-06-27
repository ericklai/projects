#include <iostream>
using namespace std;

double radius, area;
double PI = 3.141;
main()
{
    cout << "Enter the radius:\n";
    cin >> radius;
    area = PI * (radius * radius);
    cout << "The area is " << area;
    return 0;
}
