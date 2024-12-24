using Entities;
using Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public class AlumniService : IAlumniService
    {
        private readonly IAlumniRepository _repository;

        public AlumniService(IAlumniRepository repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<Alumni>> GetAllAsync() => await _repository.GetAllAsync();

        public async Task<Alumni> GetByIdAsync(int id) => await _repository.GetByIdAsync(id);

        public async Task AddAsync(Alumni alumni) => await _repository.AddAsync(alumni);

        public async Task UpdateAsync(Alumni alumni) => await _repository.UpdateAsync(alumni);

        public async Task DeleteAsync(int id) => await _repository.DeleteAsync(id);
    }


}
